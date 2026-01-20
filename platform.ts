import process from 'node:process'

const isH5 = process.env.UNI_PLATFORM === 'h5'
const isAppPlus = process.env.UNI_PLATFORM === 'app'
const isAppHarmony = process.env.UNI_PLATFORM === 'app-harmony'
const WeappTailwindcssDisabled = isH5 || isAppPlus || isAppHarmony
const isMp = !isH5 && !isAppPlus && !isAppHarmony

export { isAppHarmony, isAppPlus, isH5, isMp, WeappTailwindcssDisabled }
