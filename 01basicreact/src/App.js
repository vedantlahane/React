
function MyButton(){
  return(
    <button>I,m Button</button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <MyButton/>
    </div>
  );
}
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}