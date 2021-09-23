import { useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

export const IsMobileWidth = () => {
    const theme = useTheme()
    return useMediaQuery(theme.breakpoints.between('xs', 'sm'))
  }
  
  export const IsDesktopWidth = () => {
    const theme = useTheme()
    return useMediaQuery(theme.breakpoints.between('lg', 'xl'))
  }
  
  export const IsTabletWidth = () => {
    const theme = useTheme()
    return useMediaQuery(theme.breakpoints.between('sm', 'md'))
  }