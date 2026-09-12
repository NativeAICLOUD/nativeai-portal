import MyTooltip from "../controls/Tooltip";

type Props = {
  children: React.ReactElement;
}

function CoomingSoon({ children }: Props) {
  return (
    <span>
      <MyTooltip content="Coming Soon">
        {children}
      </MyTooltip>
    </span>
  );
}

export default CoomingSoon;