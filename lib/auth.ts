// Simple admin authentication helper
export function validateAdminPassword(password: string): boolean {
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) {
    console.error("ADMIN_PASSWORD not set in environment");
    return false;
  }
  return password === adminPassword;
}

export function getAdminTokenFromHeaders(headers: Headers): string | null {
  const auth = headers.get("authorization");
  if (!auth || !auth.startsWith("Bearer ")) {
    return null;
  }
  return auth.substring(7);
}

// For simple demo purposes, token is just the password
// In production, use JWT or session tokens
export function validateAdminToken(token: string): boolean {
  return validateAdminPassword(token);
}
