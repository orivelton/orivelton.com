import Typography from "typography"



delete Wordpress2016.googleFonts

const typography = new Typography()

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
//export const rhythm = typography.rhythm
//export const scale = typography.scale
