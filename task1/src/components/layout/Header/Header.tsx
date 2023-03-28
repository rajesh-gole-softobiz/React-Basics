import "./Header.css"
function Header () {
  const header = {
    name : "Header"
  }
  return (
    <div className="header">
      <h1>{header.name}</h1>
    </div>
  )
}
export default Header
