import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { format } from 'timeago.js'
import person from '../../../public/person.jpg'

const BlogComment = ({ comment, setComments }: { comment: any, setComments: any }) => {
  const { data: session } = useSession()
  const token = (session?.user as any)?.accessToken;

  const handleDeleteComment = async () => {
    try {
      await fetch(`http://localhost:3000/api/comment/${comment?._id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        },
        method: "DELETE"
      })

      setComments((prev: any) => {
        return [...prev].filter((c) => c?._id !== comment?._id)
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={'container h-full w-full'}>
      <div className={'wrapper w-11/12 h-full mx-auto flex justify-between items-center'}>
        <div className={'left flex gap-5'}>
          <Image className="w-10 h-10 object-cover rounded-full" src={person} width='45' height='45' alt="" />
          <div className="userData flex flex-col items-start gap-1">
            <h4>{comment?.authorId?.username}</h4>
            <span className={'timeago text-sm text-gray-600'}>{format(comment?.createdAt)}</span>
          </div>
          <span>{comment?.text}</span>
        </div>
        <div className={'flex items-center gap-4 cursor-pointer'}>
          {(session?.user as any)?._id === comment?.authorId?._id && (
            'ICON'
            //  <BsTrash className={'trashIcon cursor-pointer'}  onClick={handleDeleteComment} />
          )}
        </div>
      </div>
    </div>
  )
}

export default BlogComment