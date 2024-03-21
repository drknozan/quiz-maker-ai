import SettingsForm from '../../components/SettingsForm';

export default async function Settings() {
  return (
    <main className="bg-black">
      <div className="bg-[url('/bg-primary.jpeg')] bg-cover bg-fixed bg-center">
        <div className="flex h-screen items-center backdrop-blur-md">
          <SettingsForm />
        </div>
      </div>
    </main>
  );
}
