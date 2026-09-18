# Git push workflow

You've got two remotes set up:

- `github` → `NativeAICLOUD/nativeai-portal` — **this is the one Vercel actually watches.** Push `master` here and production (nativeai.cloud) updates. Push `dev` here and the preview updates.
- `origin` → Azure DevOps — just a mirror, doesn't trigger any deploy.

So the rule of thumb: if you want the live site to change, push to `github`, not `origin`.

## Normal day-to-day (dev / preview)

```
git add .
git commit -m "your message"
git push github dev
```

## When you're ready to go live (production)

```
git checkout master
git merge --ff-only dev
git push github master
git checkout dev
```

A few things to keep in mind:

- `--ff-only` just means "only merge if it's a clean fast-forward." If git complains, it means master has commits dev doesn't have — figure that out first instead of forcing it through.
- Every push kicks off a full production build (`next build --webpack`) before it actually goes through, so give it 5-8 minutes.
- Pushing to plain `origin` (e.g. `git push origin dev`) is totally fine to do too, it just mirrors to Azure DevOps — it won't do anything to the live site either way.
