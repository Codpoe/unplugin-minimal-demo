import { createUnplugin } from 'unplugin'
import { Options } from './types'

export default createUnplugin<Options>(() => ({
  name: 'unplugin-starter',
  resolveId(id) {
    return id === 'my-unplugin-virtual-id' ? id : null
  },
  load(id) {
    if (id === 'my-unplugin-virtual-id')
      return 'export default \'hello my-unplugin\''
  },
}))
