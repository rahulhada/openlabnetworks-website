import React, { useState } from "react";
import { Handshake, ShieldCheck, Cpu, ArrowRight, X } from "lucide-react";
import { toast } from "sonner";

interface PartnerModalProps {
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const PartnerModal: React.FC<PartnerModalProps> = ({ children, isOpen: externalOpen, onClose }) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    workEmail: "",
    collabType: "reciprocal_services",
    serviceDescription: "",
  });

  const isModalOpen = externalOpen !== undefined ? externalOpen : internalOpen;
  const handleClose = () => {
    if (onClose) onClose();
    else setInternalOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName || !formData.workEmail) {
      toast.error("Please provide both company name and official work email.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      handleClose();
      toast.success("Partnership inquiry submitted successfully!", {
        description: `Our ecosystem team will reach out to ${formData.workEmail} within 24 hours.`,
      });
      setFormData({
        companyName: "",
        workEmail: "",
        collabType: "reciprocal_services",
        serviceDescription: "",
      });
    }, 800);
  };

  return (
    <>
      {children && (
        <div onClick={() => setInternalOpen(true)} className="inline-block cursor-pointer">
          {children}
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in" style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)" }}>
          <div
            className="relative w-full max-w-lg rounded-2xl p-6 shadow-2xl"
            style={{
              background: "var(--page-bg)",
              border: "1px solid var(--card-border)",
              color: "var(--text-primary)",
            }}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-1 rounded-lg transition-colors"
              style={{ color: "var(--text-muted)" }}
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-mono mb-2 uppercase tracking-widest" style={{ color: "var(--accent-color)" }}>
                <Cpu size={14} /> Reciprocal Partner Program
              </div>
              <h3 className="text-xl font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>
                Join the OpenLab Partner Ecosystem
              </h3>
              <p className="text-xs mt-1 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Feature your SmartNIC silicon, cloud infrastructure, or AI networking stack on OpenLab, and access our interactive FPGA sandboxes.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium font-mono mb-1" style={{ color: "var(--text-secondary)" }}>
                  Organization / Company Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Mellanox / Pensando / Cloud Scale"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full rounded-lg px-3 py-2 text-xs focus:outline-none transition-colors theme-input"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium font-mono mb-1" style={{ color: "var(--text-secondary)" }}>
                  Official Business Email
                </label>
                <input
                  type="email"
                  placeholder="partnerships@organization.com"
                  value={formData.workEmail}
                  onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                  className="w-full rounded-lg px-3 py-2 text-xs focus:outline-none transition-colors theme-input"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium font-mono mb-1" style={{ color: "var(--text-secondary)" }}>
                  Collaboration Model
                </label>
                <select
                  value={formData.collabType}
                  onChange={(e) => setFormData({ ...formData, collabType: e.target.value })}
                  className="w-full rounded-lg px-3 py-2 text-xs focus:outline-none transition-colors theme-input"
                >
                  <option value="reciprocal_services">Reciprocal Service Listing (Dual Showcase)</option>
                  <option value="smartnic_offload">SmartNIC / DPU Hardware Acceleration Lab</option>
                  <option value="ai_infra_cloud">AI Infrastructure & LLM Interconnect Testbed</option>
                  <option value="fpga_research">Open-Source FPGA / eBPF R&D Co-Innovation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium font-mono mb-1" style={{ color: "var(--text-secondary)" }}>
                  Technology Overview & Goals
                </label>
                <textarea
                  rows={3}
                  placeholder="Briefly describe your hardware targets, FPGA toolchains, or cloud integration requirements..."
                  value={formData.serviceDescription}
                  onChange={(e) => setFormData({ ...formData, serviceDescription: e.target.value })}
                  className="w-full rounded-lg px-3 py-2 text-xs focus:outline-none transition-colors theme-input"
                />
              </div>

              <div
                className="p-3 rounded-xl flex items-start gap-2.5 text-xs"
                style={{
                  background: "var(--accent-subtle-bg)",
                  border: "1px solid var(--accent-subtle-border)",
                  color: "var(--text-secondary)",
                }}
              >
                <ShieldCheck size={16} className="shrink-0 mt-0.5" style={{ color: "var(--accent-color)" }} />
                <span>
                  <strong style={{ color: "var(--text-primary)" }}>Reciprocal Guarantee:</strong> Approved partners gain featured placement on OpenLab&apos;s directory and direct sandbox API access.
                </span>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2 rounded-full text-xs font-medium transition-colors"
                  style={{ color: "var(--text-muted)" }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-semibold transition-colors"
                  style={{
                    background: "var(--accent-color)",
                    color: "#fff",
                  }}
                >
                  {loading ? "Submitting..." : (
                    <>
                      Submit Application <ArrowRight size={13} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PartnerModal;
