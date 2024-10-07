
// Unit tests for: Table

import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
import Table from '../Table';
import "@testing-library/jest-dom";

describe('Table() Table method', () => {
  describe('Happy Path', () => {
    it('should render the table with headers and a row of data', () => {
      render(<Table />);

      // Check for table headers
      expect(screen.getByText('Name')).toBeInTheDocument();
      expect(screen.getByText('Status')).toBeInTheDocument();
      expect(screen.getByText('Property')).toBeInTheDocument();
      expect(screen.getByText('Unit')).toBeInTheDocument();
      expect(screen.getByText('Role')).toBeInTheDocument();
      expect(screen.getByText('Last Invited')).toBeInTheDocument();

      // Check for a row of data
      expect(screen.getByText('JP')).toBeInTheDocument();
      expect(screen.getByText('jyoch12@gmail.com')).toBeInTheDocument();
      expect(screen.getByText('Active')).toBeInTheDocument();
      expect(screen.getByText('Admin')).toBeInTheDocument();
      expect(screen.getByText('ABC')).toBeInTheDocument();
      expect(screen.getByText('08/15/2024')).toBeInTheDocument();
    });

    it('should toggle the drawer when the Add button is clicked', () => {
      render(<Table />);

      const drawer = screen.getByRole('dialog', { hidden: true });
      expect(drawer).toHaveClass('translate-x-full');

      const addButton = screen.getByText('Add');
      fireEvent.click(addButton);

      expect(drawer).toHaveClass('translate-x-0');
    });
  });

  // Edge Case Tests
  describe('Edge Cases', () => {
    it('should handle clicking the Cancel button in the drawer', () => {
      render(<Table />);

     
      const addButton = screen.getByText('Add');
      fireEvent.click(addButton);

  
      const cancelButton = screen.getByText('Cancel');
      fireEvent.click(cancelButton);

  
      const drawer = screen.getByRole('dialog', { hidden: true });
      expect(drawer).toHaveClass('translate-x-full');
    });

    it('should not crash when searching with an empty input', () => {
      // Render the Table component
      render(<Table />);

   
      const searchInput = screen.getByPlaceholderText('Search by name or email');
      fireEvent.change(searchInput, { target: { value: '' } });

      
      expect(searchInput).toHaveValue('');
    });
  });
});


