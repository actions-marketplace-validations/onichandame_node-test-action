import core from '@actions/core'
import installDeps from './deps'
import runTest from './test'

const run = async ():Promise<void> => {
  try {
    await installDeps()
    await runTest()
    core.info('test passed]')
  } catch (e) {
    core.setFailed(e.message ? e.message : JSON.stringify(e))
  }
}
