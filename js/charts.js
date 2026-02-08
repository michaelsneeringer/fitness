// Chart.js visualizations
document.addEventListener('DOMContentLoaded', function() {
    // Common chart options
    const commonOptions = {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 2,
        plugins: {
            legend: {
                display: true,
                position: 'top'
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                padding: 12,
                titleFont: {
                    size: 14,
                    weight: 'bold'
                },
                bodyFont: {
                    size: 13
                },
                cornerRadius: 4
            }
        }
    };

    // Strength-Mortality Chart
    const strengthMortalityChart = document.getElementById('strengthMortalityChart');
    if (strengthMortalityChart) {
        new Chart(strengthMortalityChart, {
            type: 'bar',
            data: {
                labels: ['Lowest Quartile', 'Second Quartile', 'Third Quartile', 'Highest Quartile'],
                datasets: [{
                    label: 'Relative Mortality Risk',
                    data: [1.5, 1.2, 1.0, 0.7],
                    backgroundColor: [
                        'rgba(237, 100, 100, 0.7)',
                        'rgba(237, 137, 54, 0.7)',
                        'rgba(72, 187, 120, 0.7)',
                        'rgba(49, 151, 149, 0.7)'
                    ],
                    borderColor: [
                        'rgba(237, 100, 100, 1)',
                        'rgba(237, 137, 54, 1)',
                        'rgba(72, 187, 120, 1)',
                        'rgba(49, 151, 149, 1)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                ...commonOptions,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Relative Risk (1.0 = baseline)'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Strength Level'
                        }
                    }
                },
                plugins: {
                    ...commonOptions.plugins,
                    title: {
                        display: true,
                        text: 'All-Cause Mortality Risk by Strength Quartile'
                    }
                }
            }
        });
    }

    // VO2 Max-Mortality Chart
    const vo2maxMortalityChart = document.getElementById('vo2maxMortalityChart');
    if (vo2maxMortalityChart) {
        new Chart(vo2maxMortalityChart, {
            type: 'line',
            data: {
                labels: ['<25', '25-30', '30-35', '35-40', '40-45', '45+'],
                datasets: [{
                    label: 'Mortality Risk',
                    data: [2.0, 1.6, 1.3, 1.0, 0.7, 0.5],
                    borderColor: 'rgba(44, 82, 130, 1)',
                    backgroundColor: 'rgba(44, 82, 130, 0.1)',
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: 'rgba(44, 82, 130, 1)',
                    pointRadius: 5
                }]
            },
            options: {
                ...commonOptions,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Relative Mortality Risk'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'VO2 Max (ml/kg/min)'
                        }
                    }
                },
                plugins: {
                    ...commonOptions.plugins,
                    title: {
                        display: true,
                        text: 'Mortality Risk Decreases with Higher VO2 Max'
                    }
                }
            }
        });
    }

    // LDL Risk Chart
    const ldlRiskChart = document.getElementById('ldlRiskChart');
    if (ldlRiskChart) {
        new Chart(ldlRiskChart, {
            type: 'bar',
            data: {
                labels: ['<70', '70-100', '100-130', '130-160', '160-190', '>190'],
                datasets: [{
                    label: 'CVD Risk (Relative)',
                    data: [0.5, 0.7, 1.0, 1.4, 1.9, 2.5],
                    backgroundColor: 'rgba(237, 137, 54, 0.7)',
                    borderColor: 'rgba(237, 137, 54, 1)',
                    borderWidth: 2
                }]
            },
            options: {
                ...commonOptions,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Relative CVD Risk'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'LDL Cholesterol (mg/dL)'
                        }
                    }
                },
                plugins: {
                    ...commonOptions.plugins,
                    title: {
                        display: true,
                        text: 'Cardiovascular Disease Risk by LDL Level'
                    }
                }
            }
        });
    }

    // Blood Pressure Risk Chart
    const bpRiskChart = document.getElementById('bpRiskChart');
    if (bpRiskChart) {
        new Chart(bpRiskChart, {
            type: 'bar',
            data: {
                labels: ['Normal\n<120/80', 'Elevated\n120-129/<80', 'Stage 1\n130-139/80-89', 'Stage 2\n≥140/90'],
                datasets: [{
                    label: 'CVD Risk (Relative)',
                    data: [1.0, 1.5, 2.0, 3.0],
                    backgroundColor: [
                        'rgba(72, 187, 120, 0.7)',
                        'rgba(237, 201, 73, 0.7)',
                        'rgba(237, 137, 54, 0.7)',
                        'rgba(237, 100, 100, 0.7)'
                    ],
                    borderColor: [
                        'rgba(72, 187, 120, 1)',
                        'rgba(237, 201, 73, 1)',
                        'rgba(237, 137, 54, 1)',
                        'rgba(237, 100, 100, 1)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                ...commonOptions,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Relative CVD Risk'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Blood Pressure Category'
                        }
                    }
                },
                plugins: {
                    ...commonOptions.plugins,
                    title: {
                        display: true,
                        text: 'Cardiovascular Risk by Blood Pressure Level'
                    }
                }
            }
        });
    }

    // Body Fat Health Chart
    const bodyFatHealthChart = document.getElementById('bodyFatHealthChart');
    if (bodyFatHealthChart) {
        new Chart(bodyFatHealthChart, {
            type: 'line',
            data: {
                labels: ['10%', '15%', '20%', '25%', '30%', '35%', '40%'],
                datasets: [
                    {
                        label: 'Men - Health Risk',
                        data: [1.2, 0.8, 1.0, 1.3, 1.7, 2.2, 2.8],
                        borderColor: 'rgba(44, 82, 130, 1)',
                        backgroundColor: 'rgba(44, 82, 130, 0.1)',
                        tension: 0.4,
                        pointRadius: 5
                    },
                    {
                        label: 'Women - Health Risk',
                        data: [1.8, 1.2, 0.8, 1.0, 1.4, 1.9, 2.5],
                        borderColor: 'rgba(237, 100, 166, 1)',
                        backgroundColor: 'rgba(237, 100, 166, 0.1)',
                        tension: 0.4,
                        pointRadius: 5
                    }
                ]
            },
            options: {
                ...commonOptions,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Relative Health Risk'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Body Fat Percentage'
                        }
                    }
                },
                plugins: {
                    ...commonOptions.plugins,
                    title: {
                        display: true,
                        text: 'Metabolic Health Risk by Body Fat Percentage'
                    }
                }
            }
        });
    }

    // Homepage - Metrics Impact Overview (if element exists)
    const metricsImpactChart = document.getElementById('metricsImpactChart');
    if (metricsImpactChart) {
        new Chart(metricsImpactChart, {
            type: 'radar',
            data: {
                labels: ['Longevity', 'Heart Health', 'Metabolic Health', 'Quality of Life', 'Disease Prevention'],
                datasets: [
                    {
                        label: 'Strength',
                        data: [90, 70, 85, 95, 80],
                        borderColor: 'rgba(44, 82, 130, 1)',
                        backgroundColor: 'rgba(44, 82, 130, 0.2)',
                        pointBackgroundColor: 'rgba(44, 82, 130, 1)',
                        pointRadius: 4
                    },
                    {
                        label: 'VO2 Max',
                        data: [95, 100, 80, 85, 90],
                        borderColor: 'rgba(237, 100, 100, 1)',
                        backgroundColor: 'rgba(237, 100, 100, 0.2)',
                        pointBackgroundColor: 'rgba(237, 100, 100, 1)',
                        pointRadius: 4
                    },
                    {
                        label: 'LDL',
                        data: [85, 100, 75, 70, 95],
                        borderColor: 'rgba(237, 137, 54, 1)',
                        backgroundColor: 'rgba(237, 137, 54, 0.2)',
                        pointBackgroundColor: 'rgba(237, 137, 54, 1)',
                        pointRadius: 4
                    },
                    {
                        label: 'Blood Pressure',
                        data: [80, 95, 70, 75, 90],
                        borderColor: 'rgba(237, 100, 166, 1)',
                        backgroundColor: 'rgba(237, 100, 166, 0.2)',
                        pointBackgroundColor: 'rgba(237, 100, 166, 1)',
                        pointRadius: 4
                    },
                    {
                        label: 'Body Fat %',
                        data: [75, 80, 95, 80, 85],
                        borderColor: 'rgba(72, 187, 120, 1)',
                        backgroundColor: 'rgba(72, 187, 120, 0.2)',
                        pointBackgroundColor: 'rgba(72, 187, 120, 1)',
                        pointRadius: 4
                    }
                ]
            },
            options: {
                ...commonOptions,
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            stepSize: 20
                        }
                    }
                },
                plugins: {
                    ...commonOptions.plugins,
                    title: {
                        display: true,
                        text: 'Health Impact by Metric (Relative Importance)'
                    }
                }
            }
        });
    }

    // Generic function to create comparison charts for myths page
    const dietComparisonChart = document.getElementById('dietComparisonChart');
    if (dietComparisonChart) {
        new Chart(dietComparisonChart, {
            type: 'bar',
            data: {
                labels: ['Keto', 'Paleo', 'Low-Fat', 'Mediterranean', 'Balanced'],
                datasets: [{
                    label: 'Average Fat Loss (kg) - 12 weeks',
                    data: [5.2, 5.1, 5.3, 5.2, 5.1],
                    backgroundColor: 'rgba(72, 187, 120, 0.7)',
                    borderColor: 'rgba(72, 187, 120, 1)',
                    borderWidth: 2
                }]
            },
            options: {
                ...commonOptions,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 8,
                        title: {
                            display: true,
                            text: 'Fat Loss (kg)'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Diet Type'
                        }
                    }
                },
                plugins: {
                    ...commonOptions.plugins,
                    title: {
                        display: true,
                        text: 'Fat Loss by Diet Type (Calories & Protein Matched)'
                    },
                    subtitle: {
                        display: true,
                        text: 'No significant difference when protein and calories are controlled'
                    }
                }
            }
        });
    }

    // Supplement effectiveness chart for myths page
    const supplementChart = document.getElementById('supplementChart');
    if (supplementChart) {
        new Chart(supplementChart, {
            type: 'horizontalBar',
            data: {
                labels: ['Protein', 'Creatine', 'Vitamin D (if deficient)', 'Caffeine', 'BCAAs', 'Fat Burners', 'Detox Teas'],
                datasets: [{
                    label: 'Evidence Strength (1-10)',
                    data: [9, 8, 7, 6, 3, 1, 1],
                    backgroundColor: [
                        'rgba(72, 187, 120, 0.8)',
                        'rgba(72, 187, 120, 0.7)',
                        'rgba(237, 201, 73, 0.7)',
                        'rgba(237, 201, 73, 0.6)',
                        'rgba(237, 137, 54, 0.7)',
                        'rgba(237, 100, 100, 0.7)',
                        'rgba(237, 100, 100, 0.7)'
                    ],
                    borderColor: [
                        'rgba(72, 187, 120, 1)',
                        'rgba(72, 187, 120, 1)',
                        'rgba(237, 201, 73, 1)',
                        'rgba(237, 201, 73, 1)',
                        'rgba(237, 137, 54, 1)',
                        'rgba(237, 100, 100, 1)',
                        'rgba(237, 100, 100, 1)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                indexAxis: 'y',
                ...commonOptions,
                scales: {
                    x: {
                        beginAtZero: true,
                        max: 10,
                        title: {
                            display: true,
                            text: 'Scientific Evidence (10 = Strong Evidence)'
                        }
                    }
                },
                plugins: {
                    ...commonOptions.plugins,
                    title: {
                        display: true,
                        text: 'Supplement Effectiveness: Evidence-Based Ranking'
                    }
                }
            }
        });
    }
});
