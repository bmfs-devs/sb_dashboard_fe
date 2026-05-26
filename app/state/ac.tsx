export interface ACDevice {
  ac_number: string;
  name: string;
  status: any;
  temperature: number;
}

// Explicit wrapper type for your function's response envelope
interface FetchACListResponse {
  ACData: ACDevice[];
  Error: string | null;
}

export async function FetchACList(): Promise<FetchACListResponse> {
  try {
    const res = await fetch(`http://localhost:8080/remote/temperature`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store', 
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch AC data. Status: ${res.status}`);
    }

    let data = await res.json();
    if (data.status !== 200) {
      throw new Error(data.error_message || "Unknown backend error");
    }
    
    return {
      // Adjust 'data.Devices' or 'data.Data' depending on your Go JSON tags struct layout
      ACData: data.data.ac_statuses, 
      Error: null,
    };
    
  } catch (error: any) {
    console.error("FetchACList Error:", error);
    return {
      ACData: [], // Safely returns an array so dashboard mapping doesn't crash
      Error: error.message || "Internal network error",
    };
  }
}