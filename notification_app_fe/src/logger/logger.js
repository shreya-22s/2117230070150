async function Log(stack, level, packageName, message) {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzaHJleWEuci4yMDIzLmFpZHNAcml0Y2hlbm5haS5lZHUuaW4iLCJleHAiOjE3NzgwNDU1OTMsImlhdCI6MTc3ODA0NDY5MywiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjA0ZjUxZDBhLThjNmQtNGU0Yi1hOWUxLWM2ODc1NzJmMDg2ZiIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InNocmV5YSByIiwic3ViIjoiMGVhMmE4OGEtMzJiNS00MTcwLTg4NDctZDVkZGRmMTY0MzU4In0sImVtYWlsIjoic2hyZXlhLnIuMjAyMy5haWRzQHJpdGNoZW5uYWkuZWR1LmluIiwibmFtZSI6InNocmV5YSByIiwicm9sbE5vIjoiMjExNzIzMDA3MDE1MCIsImFjY2Vzc0NvZGUiOiJCVENEcVQiLCJjbGllbnRJRCI6IjBlYTJhODhhLTMyYjUtNDE3MC04ODQ3LWQ1ZGRkZjE2NDM1OCIsImNsaWVudFNlY3JldCI6InlzdlpzYU5xQW1UZ2tEWU4ifQ.9-lNHf-wMh0gNN9aNazyq9qfHggLa1kViCXG17rfcgE";

    const logData = {
        stack: stack,
        level: level,
        package: packageName,
        message: message
    };

    try {
        const response = await fetch(
            "http://20.207.122.201/evaluation-service/logs",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(logData)
            }
        );

        const data = await response.json();
        console.log("SUCCESS: ", data);

    } catch (error) {
        console.error("ERROR: ", error);
    }
}

export default Log;

