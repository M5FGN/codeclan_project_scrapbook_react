import React from 'react';

const UserForm = () => {

return (
<div>
<h1>User Form</h1>
<form>
    <label>Username ... </label>
<input type="text" placeholder="Enter User Name ..." name = "name"></input>
<label>Password ...</label>
<input type="text" placeholder="Enter Password ..." name = "password"></input>
<input type="submit" value= "Login"></input>
</form>

</div>
)
}
export default UserForm;