"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type Project = {
  _id?: string;
  title: string;
  description?: string;
  image?: string;
  techs?: string[];
  href?: string;
};

export default function AdminDashboard() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState<Project>({
    title: "",
    description: "",
    image: "",
    techs: [],
    href: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/admin/login");
      return;
    }
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch("/api/projects");
      const data = await res.json();
      if (data.projects) {
        setProjects(data.projects);
      }
    } catch (err) {
      setError("Failed to load projects");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    router.push("/admin/login");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/admin/login");
      return;
    }

    try {
      const isEditing = !!editingProject;
      const url = "/api/admin/projects";
      const method = isEditing ? "PUT" : "POST";

      const payload = isEditing
        ? { ...formData, _id: editingProject._id }
        : formData;

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        await fetchProjects();
        resetForm();
        setError("");
      } else {
        const data = await res.json();
        setError(data.error || "Operation failed");
      }
    } catch (err) {
      setError("An error occurred");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this project?")) return;

    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/admin/login");
      return;
    }

    try {
      const res = await fetch(`/api/admin/projects?id=${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        await fetchProjects();
        setError("");
      } else {
        const data = await res.json();
        setError(data.error || "Delete failed");
      }
    } catch (err) {
      setError("An error occurred");
    }
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      description: project.description || "",
      image: project.image || "",
      techs: project.techs || [],
      href: project.href || "",
    });
    setShowAddForm(true);
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      image: "",
      techs: [],
      href: "",
    });
    setEditingProject(null);
    setShowAddForm(false);
  };

  const handleTechsChange = (value: string) => {
    const techsArray = value
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
    setFormData({ ...formData, techs: techsArray });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#7FFFD4] via-[#40E0D0] to-[#20B2AA] bg-clip-text text-transparent">
            Admin Dashboard
          </h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>

        {/* Error Display */}
        {error && (
          <div className="mb-6 p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-200">
            {error}
          </div>
        )}

        {/* Add Project Button */}
        {!showAddForm && (
          <button
            onClick={() => setShowAddForm(true)}
            className="mb-6 px-6 py-3 bg-gradient-to-r from-[#7FFFD4] via-[#40E0D0] to-[#20B2AA] text-black font-semibold rounded-lg hover:scale-105 transition duration-300"
          >
            + Add New Project
          </button>
        )}

        {/* Add/Edit Form */}
        {showAddForm && (
          <div className="mb-8 p-6 bg-gray-800 rounded-xl border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">
              {editingProject ? "Edit Project" : "Add New Project"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#40E0D0]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#40E0D0]"
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Image URL
                </label>
                <input
                  type="text"
                  value={formData.image}
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#40E0D0]"
                  placeholder="/project-image.png"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Technologies (comma-separated)
                </label>
                <input
                  type="text"
                  value={formData.techs?.join(", ") || ""}
                  onChange={(e) => handleTechsChange(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#40E0D0]"
                  placeholder="Next.js, MongoDB, React"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Project URL
                </label>
                <input
                  type="text"
                  value={formData.href}
                  onChange={(e) =>
                    setFormData({ ...formData, href: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#40E0D0]"
                  placeholder="https://github.com/..."
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="px-6 py-2 bg-gradient-to-r from-[#7FFFD4] via-[#40E0D0] to-[#20B2AA] text-black font-semibold rounded-lg hover:scale-105 transition duration-300"
                >
                  {editingProject ? "Update" : "Create"}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Projects List */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              Projects ({projects.length})
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-900">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Technologies
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {projects.map((project) => (
                  <tr key={project._id} className="hover:bg-gray-750">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                      {project.title}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300 max-w-xs truncate">
                      {project.description}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300">
                      {project.techs?.join(", ")}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                      <button
                        onClick={() => handleEdit(project)}
                        className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(project._id!)}
                        className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {projects.length === 0 && (
              <div className="p-8 text-center text-gray-400">
                No projects yet. Add your first project above!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
