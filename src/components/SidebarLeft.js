
import styles from '../../styles/SidebarStyles.module.css';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import AnimationOutlinedIcon from '@mui/icons-material/AnimationOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';

const SidebarLeft = () => {
    

return(
    <>
    <div className={styles.container}>
    <div className={styles.elements}><HomeOutlinedIcon/>&nbsp;home</div>
    <div className={styles.elements}><PermIdentityOutlinedIcon/>&nbsp;profile</div>
    <div className={styles.elements}><AnimationOutlinedIcon/>&nbsp;explore</div>
    <div className={styles.elements}><BookmarksOutlinedIcon/>&nbsp;read later</div>
    </div>
    </>
 )
}

export default SidebarLeft;