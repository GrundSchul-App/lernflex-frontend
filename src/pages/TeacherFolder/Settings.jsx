import ChangePassword from "./settings/ChangePassword";
import UserDataUpdate from "./settings/UserDataUpdate";

function Settings() {
  return (
    <div className="flex grow rounded-xl bg-white m-4 min-h-[830px] justify-between">
      <UserDataUpdate />

      <ChangePassword />
    </div>
  );
}
export default Settings;
