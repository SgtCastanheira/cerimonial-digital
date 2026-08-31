export function extractYoutubeId(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname.includes('youtu.be')) {
      return u.pathname.replace('/', '') || null;
    }
    if (u.searchParams.has('v')) {
      return u.searchParams.get('v');
    }
    return null;
  } catch {
    return null;
  }
}

export function youtubeEmbedUrl(url: string): string | null {
  const id = extractYoutubeId(url);
  return id ? `https://www.youtube-nocookie.com/embed/${id}` : null;
}
