const putJSONData = async (updatedData) => {
  const binId = '655ea5e30574da7622ca6bc1'; 
  const apiKey = '$2b$10$zhqQdXWQew55ytBi6tw5teLZTtv2I49Bx0K2R7XG.8DdZ.tlirKxC'; 
  const url = "https://api.jsonbin.io/v3/b/" + binId;

  try {
	// Step 1: Update the JSONbin with the modified array
	const response = await fetch(url, {
	  method: 'PUT',
	  headers: {
		'X-Master-Key': apiKey,
		'Content-Type': 'application/json',
		'X-Bin-Versioning': 'false', // Prevent versioning if necessary
	  },
	  body: JSON.stringify(updatedData), // Convert back to a JSON string
	});

	if (response.status !== 200) {
	  throw new Error('Failed to update data');
	}

	alert('Data successfully updated');
	return await response.json();
  } catch (error) {
	console.error('Error:', error.message);
	throw error;
  }
};
