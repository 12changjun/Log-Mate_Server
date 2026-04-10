export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">⚙️ 설정</h1>
      <div className="bg-white rounded-3xl p-8 space-y-6">
        <div className="flex justify-between items-center">
          <p className="font-medium">카카오톡 알림 받기</p>
          <input type="checkbox" className="w-5 h-5" defaultChecked />
        </div>
        <div className="flex justify-between items-center">
          <p className="font-medium">회의 자동 저장</p>
          <input type="checkbox" className="w-5 h-5" defaultChecked />
        </div>
      </div>
    </div>
  );
}
