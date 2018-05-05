
class PolicyService {
    isUserAllowedtoDelete(user, post) {
        return user.id === post.user_id;
    }
}