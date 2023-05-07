const LogLevel = Object.freeze({
    DEBUG: {
        id: 0,
        name: "DEBUG",
        description:
            "Detailed debug information, usually only useful to developers.",
        color: "#7E7E7E",
        allowedArgs: false,
    },
    INFO: {
        id: 1,
        name: "INFO",
        description: "General information about the system or application.",
        color: "#2196F3",
        allowedArgs: false,
    },
    NOTICE: {
        id: 2,
        name: "NOTICE",
        description:
            "Normal but significant events, such as start up, shut down, or configuration changes.",
        color: "#8BC34A",
        allowedArgs: false,
    },
    WARNING: {
        id: 3,
        name: "WARNING",
        description:
            "Warning messages, indicating potential issues or errors that should be addressed.",
        color: "#FFC107",
        allowedArgs: false,
    },
    ERROR: {
        id: 4,
        name: "ERROR",
        description:
            "Error messages indicating a failure or error that must be addressed.",
        color: "#F44336",
        allowedArgs: false,
    },
    CRITICAL: {
        id: 5,
        name: "CRITICAL",
        description:
            "Critical errors, indicating a system failure or security breach that requires immediate attention.",
        color: "#D50000",
        allowedArgs: false,
    },
    ALERT: {
        id: 6,
        name: "ALERT",
        description:
            "Immediate action required, usually indicating a system emergency.",
        color: "#E91E63",
        allowedArgs: false,
    },
    EMERGENCY: {
        id: 7,
        name: "EMERGENCY",
        description:
            "Emergency messages, indicating a catastrophic failure or system shutdown.",
        color: "#6D4C41",
        allowedArgs: false,
    },
    SECURITY: {
        id: 8,
        name: "SECURITY",
        description:
            "Security-related events, such as authentication failures or intrusion attempts.",
        color: "#673AB7",
        allowedArgs: false,
    },
    PERFORMANCE: {
        id: 9,
        name: "PERFORMANCE",
        description:
            "Performance-related events, such as slow response times or high resource usage.",
        color: "#4CAF50",
        allowedArgs: false,
    },
    AUDIT: {
        id: 10,
        name: "AUDIT",
        description:
            "Audit log entries, tracking user activity or system events for compliance or forensic purposes.",
        color: "#795548",
        allowedArgs: false,
    },
    VERBOSE: {
        id: 11,
        name: "VERBOSE",
        description:
            "Very detailed log entries, providing extra information for troubleshooting or debugging.",
        color: "#9E9E9E",
        allowedArgs: false,
    },
    DEBUG2: {
        id: 12,
        name: "DEBUG2",
        description: "Even more detailed debug information than DEBUG.",
        color: "#424242",
        allowedArgs: false,
    },
    DEBUG3: {
        id: 13,
        name: "DEBUG3",
        description:
            "The most detailed debug information, usually only used for highly complex systems or issues.",
        color: "#212121",
        allowedArgs: false,
    },
});
