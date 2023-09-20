import { Row, Col } from 'react-bootstrap'
import { PageLayout, Headings } from '../../components'
import { useStore } from '../../config/store'
import { useEffect } from 'react'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'

export default function Account() {
  const { currentUser, links, adminLinks } = useStore()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    document.title = `${currentUser.user?.username} account`
    if (location.pathname === '/account') {
      navigate(`/account/${currentUser?.user?.username}/orders`)
    }
  }, [currentUser?.user?.username, location.pathname, navigate])

  return (
    <PageLayout>
      <Headings title={`Welcome, ${currentUser?.user?.username}`} />
      <Row
        className='mx-auto position-relative border border-3 shadow'
        style={{ minHeight: '700px' }}
      >
        <Col
          lg={3}
          className='bg-white p-3 d-none d-lg-block border position-absolute top-0 h-100'
        >
          {links.map((item, i) => (
            <span key={i} className='d-flex align-items-center gap-2 mb-3'>
              <div style={{ fontSize: '30px' }}>{item.icon}</div>
              <NavLink
                to={`${item.path}`}
                className={({ isActive }) =>
                  isActive
                    ? 'text-success fw-bold fs-5 mt-1'
                    : 'text-black fw-medium fs-5 mt-1'
                }
              >
                {item.name}
              </NavLink>
            </span>
          ))}
          {currentUser?.user?.isAdmin === true && (
            <>
              <hr />
              {adminLinks.map((item, i) => (
                <span key={i} className='d-flex align-items-center gap-2 mb-3'>
                  <div style={{ fontSize: '30px' }}>{item.icon}</div>
                  <NavLink
                    to={`${item.path}`}
                    className={({ isActive }) =>
                      isActive
                        ? 'text-success fw-bold fs-5 mt-1'
                        : 'text-black fw-medium fs-5 mt-1'
                    }
                  >
                    {item.name}
                  </NavLink>
                </span>
              ))}
            </>
          )}
        </Col>
        <Col lg={9} className='p-3 bg-light border ms-auto'>
          <Outlet />
        </Col>
      </Row>
    </PageLayout>
  )
}
