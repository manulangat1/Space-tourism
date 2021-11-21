
import { makeStyles } from "@material-ui/core";
import { url } from "inspector";
import Background from '../../assets/images/svgs/Background.svg'

const useStyles = makeStyles((theme) => ({
    root:{
        backgroundImage: "url(" + `${Background}` + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
        // height
    },
    Menus:{
        zIndex:999,
        display:"flex",
        justifyContent:"flex-center",
        [theme.breakpoints.down('sm')]: {
           display:"none"
          },
    },
    toolbar:{
        padding:"2rem",
        margin:"0 3rem",
        [theme.breakpoints.down('sm')]:{
            padding:"1rem",
            margin:"0 1rem"
        }
    },
    smNav:{
        display:"none",
        // [theme.breakpoints.up('sm')]:{
        //     display:"none !important"
        // },
        [theme.breakpoints.down('sm')]:{
            display:"flex",
            color:"white",
            backgroundColor:"white !important",
        }
    }
}))
export default useStyles;