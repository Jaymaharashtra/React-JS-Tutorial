function Games(){
    return(
        <div className="name">
            <h3>This Games are trending now...</h3>
        </div>

    );
}

export function Text(){
    return(
        <h4>I am here so please give me a token</h4>
    );
}
 function Profile(){

    return(
        <div className="profile">
            <Text></Text>
          <Games></Games>
          <img src="https://plus.unsplash.com/premium_photo-1704497002984-c7d360f86cc0?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="pc"></img>
      </div>
    )
  };

  export default Profile;