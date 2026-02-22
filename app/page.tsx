import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20">
        <h2 className="text-4xl font-bold mb-4">
          Welcome to Smart Library
        </h2>
        <p className="text-gray-600 max-w-xl">
          Manage books, students, and borrowing system easily with our smart system.
        </p>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 pb-20">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">📖 Book Management</h3>
          <p>Add, edit and delete books easily.</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">👩‍🎓 Student Management</h3>
          <p>Manage student registration and records.</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">🔄 Borrow & Return</h3>
          <p>Track borrowed books and due dates.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center p-4">
        © 2026 Smart Library System
      </footer>

    </div>
  );
}