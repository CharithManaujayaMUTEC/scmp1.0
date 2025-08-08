export default function Widget({ title, value }: { title: string; value: string }) {
    return (
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-gray-500 text-sm">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    );
  }
  