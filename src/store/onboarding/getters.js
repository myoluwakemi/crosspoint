export default {
    userFullName: state => state.user.first_name + ' ' + state.user.last_name,
    profile_image: state => state.user.profile_image
}