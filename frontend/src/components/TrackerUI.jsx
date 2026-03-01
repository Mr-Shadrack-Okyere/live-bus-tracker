import React from "react";

export default function TrackerUI() {
  return (
    <div style={styles.app}>

      {/* HEADER */}
      <div style={styles.header}>
        <div style={styles.title}>KNUST Shuttle Tracker</div>
        <div style={styles.subtitle}>Live Campus Transport</div>
      </div>

      {/* BUS INFO CARD */}
      <div style={styles.card}>
        <div style={styles.busNumber}>Bus A1</div>
        <div style={styles.route}>Brunei → KSB → Commercial</div>

        <div style={styles.infoRow}>
          <div>
            <div style={styles.label}>Next Stop</div>
            <div style={styles.value}>Impact Building</div>
          </div>

          <div>
            <div style={styles.label}>ETA</div>
            <div style={styles.value}>4 mins</div>
          </div>
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div style={styles.actions}>
        <button style={styles.primaryBtn}>Track My Bus</button>
        <button style={styles.secondaryBtn}>Set Notification</button>
      </div>

      {/* STATUS */}
      <div style={styles.status}>
        System Ready ✅
      </div>

    </div>
  );
}

const styles = {
  app: {
    height: "100vh",
    background: "#0f172a",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "40px",
    fontFamily: "Arial"
  },

  header: {
    textAlign: "center",
    marginBottom: "30px"
  },

  title: {
    fontSize: "26px",
    fontWeight: "bold"
  },

  subtitle: {
    fontSize: "14px",
    opacity: 0.7
  },

  card: {
    background: "#1e293b",
    padding: "20px",
    borderRadius: "12px",
    width: "90%",
    maxWidth: "400px",
    marginBottom: "25px"
  },

  busNumber: {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "5px"
  },

  route: {
    fontSize: "14px",
    opacity: 0.7,
    marginBottom: "15px"
  },

  infoRow: {
    display: "flex",
    justifyContent: "space-between"
  },

  label: {
    fontSize: "12px",
    opacity: 0.6
  },

  value: {
    fontSize: "16px",
    fontWeight: "bold"
  },

  actions: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "90%",
    maxWidth: "400px"
  },

  primaryBtn: {
    padding: "14px",
    background: "#22c55e",
    border: "none",
    borderRadius: "8px",
    color: "white",
    fontSize: "16px",
    cursor: "pointer"
  },

  secondaryBtn: {
    padding: "14px",
    background: "#334155",
    border: "none",
    borderRadius: "8px",
    color: "white",
    fontSize: "16px",
    cursor: "pointer"
  },

  status: {
    marginTop: "20px",
    fontSize: "13px",
    opacity: 0.7
  }
};