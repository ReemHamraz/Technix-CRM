import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, DownloadCloud, TrendingUp, Users, Target } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { useThemeStore } from '../../store/themeStore';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const metrics = [
  {
    id: 'roi',
    label: 'Return on Investment',
    value: 214,
    unit: '%',
    description: 'Average customer ROI after 6 months',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      values: [120, 145, 165, 180, 195, 214]
    }
  },
  {
    id: 'time',
    label: 'Time Saved',
    value: 15,
    unit: 'hours/week',
    description: 'Average time saved per sales rep',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      values: [5, 8, 10, 12, 14, 15]
    }
  },
  {
    id: 'conversion',
    label: 'Lead Conversion',
    value: 42,
    unit: '%',
    description: 'Increase in lead-to-sale conversion',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      values: [20, 25, 30, 35, 38, 42]
    }
  }
];

const DataSection: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState(metrics[0]);
  const { isDarkMode } = useThemeStore();

  const chartData = {
    labels: activeMetric.data.labels,
    datasets: [
      {
        label: activeMetric.label,
        data: activeMetric.data.values,
        fill: true,
        borderColor: '#0ea5e9',
        backgroundColor: isDarkMode ? 'rgba(14, 165, 233, 0.1)' : 'rgba(14, 165, 233, 0.2)',
        tension: 0.4,
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: isDarkMode ? '#1f2937' : 'white',
        titleColor: isDarkMode ? 'white' : '#111827',
        bodyColor: isDarkMode ? 'white' : '#111827',
        borderColor: isDarkMode ? '#374151' : '#e5e7eb',
        borderWidth: 1,
        padding: 12,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: isDarkMode ? '#374151' : '#e5e7eb',
        },
        ticks: {
          color: isDarkMode ? '#9ca3af' : '#6b7280',
        },
      },
      x: {
        grid: {
          color: isDarkMode ? '#374151' : '#e5e7eb',
        },
        ticks: {
          color: isDarkMode ? '#9ca3af' : '#6b7280',
        },
      },
    },
  };

  return (
    <Section background="light">
      <SectionTitle
        title="Real Results, Backed by Data"
        center
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
        >
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
              <BarChart3 className="mr-2 text-primary-600 dark:text-primary-400" />
              Performance Metrics
            </h3>
          </div>
          
          <div className="p-6">
            <div className="flex mb-6 border border-gray-200 dark:border-gray-700 rounded-md">
              {metrics.map((metric) => (
                <button
                  key={metric.id}
                  onClick={() => setActiveMetric(metric)}
                  className={`flex-1 py-2 px-4 text-sm font-medium transition-colors ${
                    activeMetric.id === metric.id
                      ? 'bg-primary-50 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 border-b-2 border-primary-600'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  {metric.label}
                </button>
              ))}
            </div>
            
            <div className="text-center mb-8">
              <div className="text-6xl font-bold text-gray-900 dark:text-white mb-2">
                {activeMetric.value}
                <span className="text-xl text-gray-500 dark:text-gray-400 ml-1">{activeMetric.unit}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{activeMetric.description}</p>
            </div>
            
            <div className="h-64">
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-6">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Case Study: Retail Growth
              </h3>
              <Button variant="outline" size="sm" className="flex items-center">
                <DownloadCloud size={16} className="mr-1" />
                Download PDF
              </Button>
            </div>
            
            <div className="p-6">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                How ShopHub increased their monthly recurring revenue by 40% within three months of implementing Technix-CRM.
              </p>
              
              <ul className="space-y-4 mb-4">
                <li className="flex items-start space-x-3">
                  <TrendingUp className="w-5 h-5 text-coral-500 mt-1" />
                  <span className="text-gray-700 dark:text-gray-300">Automated 93% of follow-up emails</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-coral-500 mt-1" />
                  <span className="text-gray-700 dark:text-gray-300">Reduced customer churn by 24%</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Target className="w-5 h-5 text-coral-500 mt-1" />
                  <span className="text-gray-700 dark:text-gray-300">Increased sales team productivity by 37%</span>
                </li>
              </ul>
              
              <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                <span>5 minute read</span>
                <span>Published: April 2025</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Success Story: Tech Scale-up
              </h3>
              <Button variant="outline" size="sm" className="flex items-center">
                <DownloadCloud size={16} className="mr-1" />
                Download PDF
              </Button>
            </div>
            
            <div className="p-6">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                How CodeNest used Technix-CRM's AI features to qualify leads and grow enterprise deals by 52%.
              </p>
              
              <ul className="space-y-4 mb-4">
                <li className="flex items-start space-x-3">
                  <TrendingUp className="w-5 h-5 text-coral-500 mt-1" />
                  <span className="text-gray-700 dark:text-gray-300">Cut sales cycle from 45 to 28 days</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-coral-500 mt-1" />
                  <span className="text-gray-700 dark:text-gray-300">Improved lead scoring accuracy by 68%</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Target className="w-5 h-5 text-coral-500 mt-1" />
                  <span className="text-gray-700 dark:text-gray-300">Automated 85% of data entry tasks</span>
                </li>
              </ul>
              
              <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                <span>7 minute read</span>
                <span>Published: May 2025</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default DataSection;