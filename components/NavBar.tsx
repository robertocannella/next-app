import Link from 'next/link'

const NavBar = () => {
    const styles ={
        display: 'flex',
        background: 'grey',
        justifyContent: 'space-between',
        padding: '10px'
    }
    return (
        <div style={styles}>
            <Link href={'/about'}><button>About Page</button></Link>
            <Link href={'/contact'}><button>Contact Page</button></Link>
            <Link href={'/'}><button>Home Page</button></Link>
        </div>
        )

}
export default NavBar