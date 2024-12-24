import { useState, useRef, useEffect } from 'react';

interface DragAndDropHook {
    dragging: boolean;
    file: File | null;
    handleDragEnter: (e: React.DragEvent<HTMLDivElement>) => void;
    handleDragLeave: () => void;
    handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
    handleDrop: (e: React.DragEvent<HTMLDivElement>) => void;
    handleClick: (e: React.MouseEvent<HTMLDivElement>) => void;
    clearFile: () => void;
}

const useDragAndDrop = (uploadCallback: () => void): DragAndDropHook => {
    const [dragging, setDragging] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const clearButtonRef = useRef<HTMLButtonElement | null>(null);

    const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = () => {
        setDragging(false);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();

        setDragging(false);

        const droppedFiles = Array.from(e.dataTransfer.files) as File[];
        // Only accept the first dropped file
        setFile(droppedFiles[0] || null);
    };

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const isClearButtonClick =
            (e.target as HTMLElement).getAttribute('data-clear-button') ===
            'true';
        if (!isClearButtonClick) {
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.accept = 'application/pdf,.docx';
            fileInput.multiple = false; // Allow only one file
            fileInput.addEventListener('change', (event) => {
                const inputEvent = event as Event & {
                    target: HTMLInputElement;
                };
                const selectedFile =
                    (inputEvent.target.files && inputEvent.target.files[0]) ||
                    null;
                setFile(selectedFile);
            });

            fileInput.click();
        }
    };

    const clearFile = () => {
        setFile(null);
    };

    useEffect(() => {
        if (file && uploadCallback) {
            uploadCallback();
        }
    }, [file, uploadCallback]);
    useEffect(() => {
        if (clearButtonRef.current) {
            clearButtonRef.current.addEventListener('click', clearFile);
        }

        return () => {
            if (clearButtonRef.current) {
                clearButtonRef.current.removeEventListener('click', clearFile);
            }
        };
    }, []);

    return {
        dragging,
        file,
        handleDragEnter,
        handleDragLeave,
        handleDragOver,
        handleDrop,
        handleClick,
        clearFile,
    };
};

export default useDragAndDrop;
