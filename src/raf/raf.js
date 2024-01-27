
                   { user? <>
                    <Link className="mr-80" to='/dashboard'>Dashboard</Link>
                    <span><img src={user.photoURL} alt="" /></span>
                    <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
                    </> : <>
                    <Link to='/login'>Login</Link>
                    </>
                   }