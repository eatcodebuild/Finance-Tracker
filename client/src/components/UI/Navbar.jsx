import Button from "../UI/Button";

export default function Navbar({ className, user, ...props }) {
  return (
    <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
      {user && (
        <div className="flex gap-5 items-center">
          <img src={user?.picture} alt="Profile Picture" className="rounded-full h-12" />
          <h3 className="dark:text-white text-secondary">Hi, {props.nameUpdate}!</h3>
        </div>
      )}
      <div className="ms-auto">
        <div className="flex gap-1 justify-end">
          {user && <Button purpose="account" onClick={props.handleShowAccount}></Button>}
          <Button purpose="darkToggle"></Button>
          {user && <Button onClick={props.handleLogout}>Logout</Button>}
        </div>
      </div>
    </nav>
  );
}
