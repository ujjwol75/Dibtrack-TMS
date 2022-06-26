import{ useState } from "react";
import ViewProfile from "../Profile/ViewProfile";
import UserSettings from "./UserSettings";

type Props = {
  user: any;
};

const MemberTableBody = (props: Props) => {
  const { user } = props;
  const [copystatus, setCopyStatus] = useState<string>('copy');
  return (
    <tr key={user?.id}>
      <ViewProfile user={user} />

      <td className="p-3 flex flex-row useremail">
        <button className="border border-btncolor py-[1px] px-[6px] text-[8px] mr-2 text-btncolor rounded-md">
          OWNER
        </button>
        <p>{user?.email}</p>
        <button
          className="bg-btncolor py-[2px] px-[4px] rounded  text-white ml-2 invisible copy"
          onClick={() => {
            navigator.clipboard.writeText(user?.email);
            setCopyStatus("copied");
          }}
        >
          {copystatus}
        </button>
      </td>

      <td className="p-2 ">{user?.role}</td>
      <td className="p-2 ">{user?.last_login?.substring(0, 10)}</td>
      <td className="p-2 ">
        <UserSettings id={user?.id} />
      </td>
    </tr>
  );
};

export default MemberTableBody;
