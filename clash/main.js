var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjQ2N2IyNDc2LWQ2ZGEtNGMwMS1hZjYyLWRiNTc0MTE3MGQ3NyIsImlhdCI6MTY4ODE0NjQ2MSwic3ViIjoiZGV2ZWxvcGVyL2FkZmJkYmZlLTdjY2YtOWQ4YS0xZGEyLTc4M2U4NTcwM2EwYyIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxMDEuNTYuODkuNjkiXSwidHlwZSI6ImNsaWVudCJ9XX0.0JHBPFVmP9BQmk1F_7Yoz5bLKTM8SzoxvZcjy7nAs70quOr7uhbhyyKc9e33ypMwmzLt8E-qODe_OHi-jvvgbA";

fetch("https://api.clashroyale.com/v1/players/%23R9C0PQV", {
    method : "GET",
    headers : {
        'Authorization': `Bearer ${token}`
    }
}).then((risposta) => {
    return risposta.json();
}).then((data) => {
    console.log(data);
});