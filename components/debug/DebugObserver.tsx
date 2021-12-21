import { useEffect } from 'react'
import { useRecoilSnapshot } from 'recoil'

export const DebugObserver = () => {
  const snapshot = useRecoilSnapshot()
  useEffect(() => {
    console.debug('The following atoms were modified:')
    // eslint-disable-next-line no-restricted-syntax
    for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
      console.debug(node.key, snapshot.getLoadable(node))
    }
  }, [snapshot])

  return null
}
