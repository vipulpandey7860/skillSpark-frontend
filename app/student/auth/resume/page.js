"use client"
import React, { useRef, useState } from 'react';
import ResumeEducation from './ResumeEducation';
import ResumeJobs from './ResumeJob';
import ResumeProfile from './ResumeProfile';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const ResumePage = () => {
    const resumeContainerRef = useRef(null);
    const [editMode, setEditMode] = useState(false); // State for edit mode

    const handleDownloadPDF = () => {
        const pdf = new jsPDF('p', 'pt', 'a4');
        const resumeContainer = resumeContainerRef.current;
      
        // Capture the content as an image using html2canvas
        html2canvas(resumeContainer).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
      
            // Adjust the scale to fit the PDF page with padding
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const padding = 5; // Adjust the padding as needed
            const imgWidth = pdfWidth - 2 * padding;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
            // Start the image from the top-left corner
            const xPos = padding;
            const yPos = padding;
      
            pdf.addImage(imgData, 'PNG', xPos, yPos, imgWidth, imgHeight);
            pdf.save('resume.pdf');
        });
      };

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    return (
        <>
            <h1 className="text-center text-4xl font-bold py-5">Resume</h1>

            <div className="container px-24 py-5 shadow-md" ref={resumeContainerRef}>
                <ResumeProfile />
                <ResumeEducation isEditMode={editMode} />
                <ResumeJobs isEditMode={editMode} />
                {/* Add other resume components here */}
            </div>

            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleDownloadPDF}
            >
                Download PDF
            </button>

            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={toggleEditMode}
            >
                {editMode ? 'Exit Edit Mode' : 'Edit Resume'}
            </button>
        </>
    );
};

export default ResumePage;
