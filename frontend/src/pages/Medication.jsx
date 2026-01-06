import { useState } from 'react';

export default function Medication() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedMeds, setExpandedMeds] = useState({});

  const medications = [
    {
      doctor: 'Dr. Vijay Anand',
      clinic: 'ABC clinic',
      dateIssued: 'July 27, 2025',
      patient: 'Aadvik Mishra',
      prescriptions: [
        {
          name: 'Atrovastatin 20 mg',
          description: 'Lowers cholesterol levels',
          dosage: '1 tablet/day',
          duration: '30 days',
          when: 'After Lunch',
          color: '#1A5239'
        },
        {
          name: 'Metoprolol 50 mg',
          description: 'Reduces Blood pressure',
          dosage: '2 tablets/day',
          duration: '60 days',
          when: 'After meals',
          color: '#E8D7BE'
        }
      ]
    },
    {
      doctor: 'Dr Nikhil Sharma',
      clinic: 'XYZ clinic',
      dateIssued: 'July 22, 2025',
      patient: 'Aadvik Mishra',
      prescriptions: [
        {
          name: 'Azithromycin 250 mg',
          description: 'Fights bacterial infections',
          dosage: '3 tablets/day',
          duration: '14 days',
          when: 'Before meals',
          color: '#1A5239'
        },
        {
          name: 'Lisinopril 10mg',
          description: 'Relieves heart strain',
          dosage: '2 tablet/day',
          duration: '60 days',
          when: 'Before meals',
          color: '#E8D7BE'
        }
      ]
    }
  ];

  const toggleMed = (medKey) => {
    setExpandedMeds(prev => ({
      ...prev,
      [medKey]: !prev[medKey]
    }));
  };

  return (
    <div style={{ minHeight: '100vh', background: '#F7F7F7' }}>
      {/* Header */}
      <header style={{ 
        background: '#F7F7F7', 
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
      <div style={{ padding: '2rem 3rem', maxWidth: '1400px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem', marginTop: 0 }}>
          Your Medication
        </h1>

        {/* Search Bar */}
        <div style={{ 
          background: 'white',
          borderRadius: '2rem',
          padding: '1rem 2rem',
          marginBottom: '2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            type="text"
            placeholder="Search medication..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              border: 'none',
              outline: 'none',
              fontSize: '1.1rem',
              flex: 1,
              background: 'transparent'
            }}
          />
        </div>

        {/* Medication List */}
        {medications.map((med, medIndex) => (
          <div key={medIndex} style={{ marginBottom: '2.5rem' }}>
            {/* Doctor Info */}
            <div style={{ 
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '1rem'
            }}>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', margin: 0, marginBottom: '0.25rem' }}>
                  {med.doctor}
                </h3>
                <p style={{ fontSize: '1rem', color: '#666', margin: 0 }}>
                  {med.clinic}
                </p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontSize: '1rem', margin: 0, marginBottom: '0.25rem' }}>
                  Date Issued: <strong>{med.dateIssued}</strong>
                </p>
                <p style={{ fontSize: '1rem', margin: 0 }}>
                  Patient: <strong>{med.patient}</strong>
                </p>
                <button style={{
                  background: '#E8D7BE',
                  border: 'none',
                  padding: '0.6rem 1.5rem',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  marginTop: '0.5rem'
                }}>
                  Download PDF
                </button>
              </div>
            </div>

            {/* Prescriptions */}
            {med.prescriptions.map((prescription, prescIndex) => {
              const medKey = `${medIndex}-${prescIndex}`;
              const isExpanded = expandedMeds[medKey];

              return (
                <div
                  key={prescIndex}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '1rem'
                  }}
                >
                  {/* Icon Outside */}
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      cursor: 'pointer'
                    }}
                    onClick={() => toggleMed(medKey)}
                  >
                    <img 
                      src="/medication.png" 
                      alt="Medicine" 
                      style={{ 
                        width: '40px', 
                        height: '40px',
                        objectFit: 'contain'
                      }}
                    />
                  </div>

                  {/* Medication Card */}
                  <div style={{
                    flex: 1,
                    background: prescription.color === '#1A5239' ? '#1A5239' : '#E8D7BE',
                    color: prescription.color === '#1A5239' ? 'white' : '#2A3B35',
                    borderRadius: '1rem',
                    padding: '1.5rem'
                  }}>
                    {/* Medication Details */}
                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '2rem', alignItems: 'center' }}>
                      <div>
                        <h4 style={{ fontSize: '1.3rem', fontWeight: 'bold', margin: 0, marginBottom: '0.25rem' }}>
                          {prescription.name}
                        </h4>
                        <p style={{ margin: 0, fontSize: '1rem', opacity: 0.9 }}>
                          {prescription.description}
                        </p>
                      </div>

                      <div>
                        <p style={{ fontSize: '1rem', fontWeight: 'bold', margin: 0, marginBottom: '0.25rem' }}>
                          Dosage
                        </p>
                        <p style={{ margin: 0, fontSize: '1rem' }}>
                          {prescription.dosage}
                        </p>
                      </div>

                      <div>
                        <p style={{ fontSize: '1rem', fontWeight: 'bold', margin: 0, marginBottom: '0.25rem' }}>
                          Duration
                        </p>
                        <p style={{ margin: 0, fontSize: '1rem' }}>
                          {prescription.duration}
                        </p>
                      </div>

                      <div>
                        <p style={{ fontSize: '1rem', fontWeight: 'bold', margin: 0, marginBottom: '0.25rem' }}>
                          When
                        </p>
                        <p style={{ margin: 0, fontSize: '1rem' }}>
                          {prescription.when}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}

        {/* View More Button */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
          <button style={{
            background: '#1A5239',
            color: 'white',
            border: 'none',
            padding: '1rem 3rem',
            borderRadius: '0.75rem',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}
          onMouseOver={(e) => e.target.style.background = '#245c42'}
          onMouseOut={(e) => e.target.style.background = '#1A5239'}>
            View more
          </button>
        </div>
      </div>
    </div>
  );
}
