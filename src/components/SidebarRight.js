
import styles from '../../styles/SidebarStyles.module.css';



const SidebarRight = () => {
    

return(
    <>
    <div className={styles.container}>
     <div className={styles.heading}>Trending: international </div>
     <div className={styles.list}>
       <li> item 1</li>
       <li> item 2</li>
       <li> item 3</li>
       <li> item 4</li>
       <li> item 5</li>
     </div>
     <div className={styles.heading}>Trending: national </div>
     <div className={styles.list}>
       <li> item 1</li>
       <li> item 2</li>
       <li> item 3</li>
       <li> item 4</li>
       <li> item 5</li>
     </div>
     <div className={styles.heading}>Trending: technology </div>
     <div className={styles.list}>
       <li> item 1</li>
       <li> item 2</li>
       <li> item 3</li>
       <li> item 4</li>
       <li> item 5</li>
    </div>
    </div>
    </>
)
}

export default SidebarRight;