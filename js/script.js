/**
 * Created by Josemy_Macbook_Pro on 6/21/18.
 */
function verifyPassword() {
    var password = $('#password').val();
    if (password.length > 15)
    {
        alert('That password is too long.');
    }
}