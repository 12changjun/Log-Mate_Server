export default function RecordingPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">🎤 회의 녹음</h1>
      <div className="bg-white rounded-3xl shadow-sm p-10 text-center">
        <div className="w-24 h-24 mx-auto bg-red-100 text-red-600 rounded-2xl flex items-center justify-center text-5xl mb-6">
          🎙️
        </div>
        <p className="text-xl font-medium">지금 회의를 시작하세요</p>
        <button className="mt-8 px-8 py-4 bg-red-600 text-white rounded-3xl text-lg font-semibold flex items-center gap-3 mx-auto">
          🔴 녹음 시작하기
        </button>
        <p className="text-gray-500 mt-6">Whisper AI가 실시간으로 STT 변환합니다</p>
      </div>
    </div>
  );
}