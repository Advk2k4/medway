import { useState } from 'react';

export default function Dashboard() {
  const [userName] = useState('Aadvik');

  return (
    <div style={{ minHeight: '100vh', background: '#F7F7F7', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <header style={{ 
        background: '#F7F7F7',  // CHANGED THIS LINE
        padding: '1rem 3rem',
        borderBottom: '1px solid #e5e7eb',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <img 
            src="/logo.png" 
            alt="Medway Logo" 
            style={{ height: '100px', width: 'auto' }}
          />
        </div>
        
        <img 
          src="/avatar.png" 
          alt="Profile" 
          style={{ 
            width: '50px', 
            height: '50px', 
            borderRadius: '50%',
            objectFit: 'cover'
          }}
        />
      </header>

      {/* Main Content */}
      <div style={{ display: 'flex', padding: '2rem', gap: '2rem', flex: 1, overflow: 'hidden' }}>
        {/* Left Side - Illustration */}
        <div style={{ flex: '0 0 35%', display: 'flex' }}>
          <div style={{ 
            background: '#F7F7F7', 
            borderRadius: '1rem', 
            padding: '1.5rem', 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%'
          }}>
            <img 
              src="/dashboard.png" 
              alt="Dashboard Illustration" 
              style={{ 
                width: '100%', 
                height: 'auto',
                objectFit: 'contain'
              }}
            />
          </div>
        </div>

        {/* Right Side - Dashboard */}
        <div style={{ flex: '1', display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem', marginTop: 0 }}>
            Hey {userName}, glad to have you back!
          </h2>
          
          <h3 style={{ fontSize: '1.6rem', fontWeight: 'bold', marginBottom: '1.2rem', marginTop: '1.2rem' }}>
            Your Dashboard
          </h3>

          {/* Dashboard Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem', marginBottom: '1.5rem' }}>
            <div style={{ 
              background: '#1A5239', 
              color: 'white', 
              padding: '2rem 1.5rem',
              borderRadius: '1rem',
              fontSize: '1.4rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              Appointments
            </div>
            
            <div style={{ 
              background: '#E8D7BE', 
              color: '#2A3B35', 
              padding: '2rem 1.5rem',
              borderRadius: '1rem',
              fontSize: '1.4rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              Medical Report
            </div>
            
            <div style={{ 
              background: '#E8D7BE', 
              color: '#2A3B35', 
              padding: '2rem 1.5rem',
              borderRadius: '1rem',
              fontSize: '1.4rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              Patient Summary
            </div>
            
            <div style={{ 
              background: '#1A5239', 
              color: 'white', 
              padding: '2rem 1.5rem',
              borderRadius: '1rem',
              fontSize: '1.4rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              Medication
            </div>
          </div>

          {/* Upcoming Appointment */}
          <h3 style={{ fontSize: '1.6rem', fontWeight: 'bold', marginBottom: '0.8rem' }}>
            Upcoming appointment
          </h3>
          
          <div style={{ 
            background: '#1A5239', 
            color: 'white', 
            padding: '1.5rem',
            borderRadius: '1rem'
          }}>
            <h4 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '0.8rem', marginTop: 0 }}>
              Dr. Vijay Anand <span style={{ fontWeight: 'normal' }}>(Cardiologist)</span>
            </h4>
            
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', fontSize: '1.1rem', lineHeight: '1.8', margin: 0 }}>
              <li>Location - 123, XYZ Street, Mumbai</li>
              <li>Appointment time - 5:30 PM</li>
              <li>Queue Position - #7(Live)</li>
              <li>Leave by - 5:03 PM</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
