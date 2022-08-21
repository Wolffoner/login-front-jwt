import { ClientUser } from "@/models";
import { Avatar, Typography } from "@mui/material";

interface Props {
    user: ClientUser;
}
const UserData = (props: Props) => {

    const { user } = props;

    return (
        <>
            <Avatar src={user?.avatar ?? ""} alt={"avatar-img"} sx={{ width: 100, height: 100 }} />
            <Typography variant="h4">{`Hello ${user?.name} ${user?.surname}!`}</Typography>
            <Typography variant="h6">Email: {user?.email}</Typography>
            <Typography variant="h6">Age: {user?.age}</Typography>
            <Typography variant="h6">Role: {user?.role}</Typography>
        </>
    )
};

export default UserData;