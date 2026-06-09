const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

/** Helper: Kirim request dengan JSON body */
async function request(endpoint, options = {}) {
  const token = localStorage.getItem('matcha_token');

  const defaultHeaders = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
  };

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: { ...defaultHeaders, ...options.headers },
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ detail: 'Unknown error' }));
    throw new Error(error.detail || `HTTP ${response.status}`);
  }

  return response.json();
}

/** Helper: Kirim request dengan FormData (untuk upload file) */
async function requestForm(endpoint, formData) {
  const token = localStorage.getItem('matcha_token');

  const response = await fetch(`${API_URL}${endpoint}`, {
    method: 'POST',
    headers: { ...(token && { Authorization: `Bearer ${token}` }) },
    body: formData,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ detail: 'Unknown error' }));
    throw new Error(error.detail || `HTTP ${response.status}`);
  }

  return response.json();
}

// ============================================================
// AUTH
// ============================================================

/** POST /auth/register — Daftar user baru */
export const register = (userData) =>
  request('/auth/register', { method: 'POST', body: JSON.stringify(userData) });

/** POST /auth/login — Login dan dapat token */
export const login = async (credentials) => {
  const data = await request('/auth/login', { method: 'POST', body: JSON.stringify(credentials) });
  if (data.access_token) localStorage.setItem('matcha_token', data.access_token);
  return data;
};

/** Logout — Hapus token dari local storage */
export const logout = () => localStorage.removeItem('matcha_token');

// ============================================================
// USER PROFILE
// ============================================================

/** GET /users/me — Ambil data profile user yang sedang login */
export const getProfile = () =>
  request('/users/me');

/** PATCH /users/me — Update data profile user */
export const updateProfile = (profileData) =>
  request('/users/me', { method: 'PATCH', body: JSON.stringify(profileData) });

/** POST /users/me/reset — Reset semua data user */
export const resetAllServices = () =>
  request('/users/me/reset', { method: 'POST' });

// ============================================================
// DOKUMEN (CV & LinkedIn)
// ============================================================

/** GET /documents — Ambil semua dokumen user */
export const getDocuments = () =>
  request('/documents');

/**
 * POST /documents/upload — Upload CV atau LinkedIn PDF
 * @param {File} file - Object File dari input/drag-drop
 * @param {'cv' | 'linkedin'} type - Tipe dokumen
 */
export const uploadDocument = (file, type) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('type', type);
  return requestForm('/documents/upload', formData);
};

/** DELETE /documents/{id} — Hapus dokumen */
export const deleteDocument = (id) =>
  request(`/documents/${id}`, { method: 'DELETE' });

// ============================================================
// AI — CAREER ANALYSIS & ROADMAP
// ============================================================

/**
 * POST /ai/analyze — Kirim job description dan trigger AI
 * AI akan membaca CV + LinkedIn + Job Desc, lalu generate roadmap
 * @param {string} jobDescription - Teks dari textarea job description
 */
export const analyzeCareer = (jobDescription) =>
  request('/ai/analyze', { method: 'POST', body: JSON.stringify({ job_description: jobDescription }) });

/** GET /ai/roadmap — Ambil hasil Learning Roadmap dari AI */
export const getRoadmap = () =>
  request('/ai/roadmap');

/** GET /ai/skills — Ambil skill gap analysis dari AI */
export const getSkillGap = () =>
  request('/ai/skills');

// ============================================================
// RESOURCES / KURSUS
// ============================================================

/**
 * GET /resources — Ambil daftar kursus yang direkomendasikan AI
 * @param {string} topic - (Opsional) Filter berdasarkan topik roadmap
 */
export const getResources = (topic = '') =>
  request(`/resources${topic ? `?topic=${encodeURIComponent(topic)}` : ''}`);

// ============================================================
// AI CHAT AGENT
// ============================================================

/**
 * POST /chat — Kirim pesan ke AI Agent
 * @param {string} message - Pesan dari user
 */
export const sendChatMessage = (message) =>
  request('/chat', { method: 'POST', body: JSON.stringify({ message }) });
