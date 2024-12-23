const Settings = () => {
    return (  <div>
        <h2 className="text-2xl font-bold text-light-purple mb-6">Settings</h2>
        <div className="bg-white p-4 shadow-md rounded">
          <h3 className="text-xl font-bold text-gray-800">Account Settings</h3>
          <p className="mt-2 text-gray-600">Manage your account settings here.</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded mt-4">
          <h3 className="text-xl font-bold text-gray-800">Privacy Settings</h3>
          <p className="mt-2 text-gray-600">Manage your privacy settings here.</p>
        </div>
      </div> );
}
 
export default Settings;