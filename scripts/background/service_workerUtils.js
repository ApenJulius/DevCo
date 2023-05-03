async function refresh() {
  try {
    const response = await fetch(chrome.runtime.getURL("data/cheats.json"));
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.warn(error);
  }
  return null;
}

async function refreshThemes() {
  try {
    const response = await fetch(chrome.runtime.getURL("data/Styles.json"));
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.warn(error);
  }
  return null;
}
