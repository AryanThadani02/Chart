document.addEventListener('DOMContentLoaded', function(animation) {
  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['RCB', 'MI', 'CSK', 'Punjab', 'KKR', 'SRH','GT','LSG','RR','DC'],
      datasets: [{
        label: 'Fans Of IPL Teams in Millions ',
        data: [30,35,40,20,25,22,15,12,28,21],
        backgroundColor: [
          'rgba(255, 0, 0, 0.4)',
          'rgba(30,144,255, 0.4)',
          'rgba(255, 205, 86, 0.4)',
          'rgba(255,69,0, 0.4)',
          'rgba(153, 102, 255, 0.4)',
          'rgba(255,140,0, 0.4)',
          'rgba(65,105,225, 0.4)',
          'rgba(0,255,255, 0.4)',
          'rgba(255,105,180, 0.4)',
          'rgba(0,0,255, 0.4)'
        ],
        
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
});
