// 서버에서 데이터를 비동기적으로 가져오는 예시 (AJAX)
window.onload = function() {
    fetch('/data')  // 서버에서 데이터를 가져오는 API 엔드포인트
        .then(response => response.json())  // JSON 형태로 데이터를 받음
        .then(data => {
            // Chart.js를 사용하여 차트를 그리기
            const ctx = document.getElementById('myChart').getContext('2d');
            const myChart = new Chart(ctx, {
                type: 'bar',  // 차트의 타입 (막대그래프)
                data: {
                    labels: data.labels,  // X축 레이블 (예: 날짜)
                    datasets: [{
                        label: '값',
                        data: data.values,  // Y축 데이터 (예: 판매 수치)
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        })
        .catch(error => console.error('데이터를 가져오는 중 오류 발생:', error));
};
