import Logo from '../assets/apollographql.png'

export default function Header() {
  return (
    <nav className='navbar bg-light mb-4 p-0'>
        <div className='container'>
            <a className='navbar-brand' href='/'>
                <div className='d-flex'>
                    <img src={Logo} alt='logo' classNmae='mr-2'/>
                        <div>Project Management</div>
                </div>
            </a>
        </div>
    </nav>
  )
}